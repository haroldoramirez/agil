# --- Created by Ebean DDL
# To stop Ebean DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table centro_de_custo (
  id                            bigserial not null,
  nome                          varchar(10) not null,
  nome_cc                       varchar(45) not null,
  gestor_cc                     varchar(45) not null,
  fonte_pagadora_id             bigint,
  data_cadastro                 timestamp not null,
  data_alteracao                timestamp,
  constraint pk_centro_de_custo primary key (id)
);

create table conta_contabil (
  id                            bigserial not null,
  nome                          varchar(10) not null,
  data_cadastro                 timestamp not null,
  data_alteracao                timestamp,
  constraint pk_conta_contabil primary key (id)
);

create table conta_orcamentaria (
  id                            bigserial not null,
  nome                          varchar(150) not null,
  data_cadastro                 timestamp not null,
  data_alteracao                timestamp,
  constraint pk_conta_orcamentaria primary key (id)
);

create table fonte_pagadora (
  id                            bigserial not null,
  nome                          varchar(200),
  descricao                     varchar(300),
  data_cadastro                 timestamp not null,
  data_alteracao                timestamp,
  constraint uq_fonte_pagadora_nome unique (nome),
  constraint pk_fonte_pagadora primary key (id)
);

create table gasto_especifico (
  id                            bigserial not null,
  nome                          varchar(100) not null,
  codigo                        integer not null,
  descricao                     varchar(400) not null,
  natureza_gasto_id             bigint,
  conta_contabil                varchar(200) not null,
  conta_orcamentaria            varchar(200) not null,
  data_cadastro                 timestamp not null,
  data_alteracao                timestamp,
  constraint pk_gasto_especifico primary key (id)
);

create table local_entrega (
  id                            bigserial not null,
  descricao                     varchar(45) not null,
  data_cadastro                 timestamp not null,
  data_alteracao                timestamp,
  constraint pk_local_entrega primary key (id)
);

create table natureza_gasto (
  id                            bigserial not null,
  codigo                        varchar(45) not null,
  centro_de_custo_id            bigint,
  data_cadastro                 timestamp not null,
  data_alteracao                timestamp,
  constraint pk_natureza_gasto primary key (id)
);

create table tr_produto (
  id                            bigserial not null,
  numero                        varchar(60) not null,
  solicitante                   varchar(150) not null,
  diretor_cc                    varchar(150) not null,
  descricao                     varchar(400) not null,
  quantidade                    integer not null,
  valor_estimado                float not null,
  centro_de_custo_id            bigint,
  gasto_especifico_id           bigint,
  natureza_gasto_id             bigint,
  local_entrega                 varchar(400) not null,
  data_cadastro                 timestamp not null,
  data_alteracao                timestamp,
  constraint pk_tr_produto primary key (id)
);

create table usuario (
  id                            bigserial not null,
  nome                          varchar(255) not null,
  data_cadastro                 timestamp not null,
  data_alteracao                timestamp,
  constraint pk_usuario primary key (id)
);

alter table centro_de_custo add constraint fk_centro_de_custo_fonte_pagadora_id foreign key (fonte_pagadora_id) references fonte_pagadora (id) on delete restrict on update restrict;
create index ix_centro_de_custo_fonte_pagadora_id on centro_de_custo (fonte_pagadora_id);

alter table gasto_especifico add constraint fk_gasto_especifico_natureza_gasto_id foreign key (natureza_gasto_id) references natureza_gasto (id) on delete restrict on update restrict;
create index ix_gasto_especifico_natureza_gasto_id on gasto_especifico (natureza_gasto_id);

alter table natureza_gasto add constraint fk_natureza_gasto_centro_de_custo_id foreign key (centro_de_custo_id) references centro_de_custo (id) on delete restrict on update restrict;
create index ix_natureza_gasto_centro_de_custo_id on natureza_gasto (centro_de_custo_id);

alter table tr_produto add constraint fk_tr_produto_centro_de_custo_id foreign key (centro_de_custo_id) references centro_de_custo (id) on delete restrict on update restrict;
create index ix_tr_produto_centro_de_custo_id on tr_produto (centro_de_custo_id);

alter table tr_produto add constraint fk_tr_produto_gasto_especifico_id foreign key (gasto_especifico_id) references gasto_especifico (id) on delete restrict on update restrict;
create index ix_tr_produto_gasto_especifico_id on tr_produto (gasto_especifico_id);

alter table tr_produto add constraint fk_tr_produto_natureza_gasto_id foreign key (natureza_gasto_id) references natureza_gasto (id) on delete restrict on update restrict;
create index ix_tr_produto_natureza_gasto_id on tr_produto (natureza_gasto_id);


# --- !Downs

alter table centro_de_custo drop constraint if exists fk_centro_de_custo_fonte_pagadora_id;
drop index if exists ix_centro_de_custo_fonte_pagadora_id;

alter table gasto_especifico drop constraint if exists fk_gasto_especifico_natureza_gasto_id;
drop index if exists ix_gasto_especifico_natureza_gasto_id;

alter table natureza_gasto drop constraint if exists fk_natureza_gasto_centro_de_custo_id;
drop index if exists ix_natureza_gasto_centro_de_custo_id;

alter table tr_produto drop constraint if exists fk_tr_produto_centro_de_custo_id;
drop index if exists ix_tr_produto_centro_de_custo_id;

alter table tr_produto drop constraint if exists fk_tr_produto_gasto_especifico_id;
drop index if exists ix_tr_produto_gasto_especifico_id;

alter table tr_produto drop constraint if exists fk_tr_produto_natureza_gasto_id;
drop index if exists ix_tr_produto_natureza_gasto_id;

drop table if exists centro_de_custo cascade;

drop table if exists conta_contabil cascade;

drop table if exists conta_orcamentaria cascade;

drop table if exists fonte_pagadora cascade;

drop table if exists gasto_especifico cascade;

drop table if exists local_entrega cascade;

drop table if exists natureza_gasto cascade;

drop table if exists tr_produto cascade;

drop table if exists usuario cascade;

