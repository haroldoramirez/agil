# --- Sample dataset

# --- !Ups

insert into fonte_pagadora(nome, descricao, data_cadastro, data_alteracao) values ('101','Investimento/Custeio', 'now', 'now');
insert into fonte_pagadora(nome, descricao, data_cadastro, data_alteracao) values ('103','EAD/treinamentos', 'now', 'now');
insert into fonte_pagadora(nome, descricao, data_cadastro, data_alteracao) values ('1101','Diversificacao de receitas FUNDACAO PTI', 'now', 'now');
insert into fonte_pagadora(nome, descricao, data_cadastro, data_alteracao) values ('1201','CEEE', 'now', 'now');
insert into fonte_pagadora(nome, descricao, data_cadastro, data_alteracao) values ('1301','Copel Mobilidade - PD 2866 - 0519/2019', 'now', 'now');
insert into fonte_pagadora(nome, descricao, data_cadastro, data_alteracao) values ('301','P&D COPEL - ENTRE RIOS DO OESTE', 'now', 'now');
insert into fonte_pagadora(nome, descricao, data_cadastro, data_alteracao) values ('601','Contrato ONUDI - GEF - 3000059537', 'now', 'now');
insert into fonte_pagadora(nome, descricao, data_cadastro, data_alteracao) values ('701','Itaipu Reatores Semicontínuos - 4500049552', 'now', 'now');
insert into fonte_pagadora(nome, descricao, data_cadastro, data_alteracao) values ('801','Itaipu Microgrid Colombari - 4500049549', 'now', 'now');
insert into fonte_pagadora(nome, descricao, data_cadastro, data_alteracao) values ('901','Itaipu Central Bioenergia Toledo - 4500051096', 'now', 'now');
insert into fonte_pagadora(nome, descricao, data_cadastro, data_alteracao) values ('1001','UD ITAIPU', 'now', 'now');
insert into fonte_pagadora(nome, descricao, data_cadastro, data_alteracao) values ('102','Servicos Tecnicos - PTMN/PTLAB e PTIM', 'now', 'now');

insert into centro_de_custo(nome, nome_cc, gestor_cc, fonte_pagadora_id, data_cadastro, data_alteracao) values ('12303029','UD','Samuel Campos da Silva',4, 'now', 'now');
insert into centro_de_custo(nome, nome_cc, gestor_cc, fonte_pagadora_id, data_cadastro, data_alteracao) values ('12301005','Copel Mobilidade','Samuel Campos da Silva',6, 'now', 'now');
insert into centro_de_custo(nome, nome_cc, gestor_cc, fonte_pagadora_id, data_cadastro, data_alteracao) values ('12301004','CEEE','Samuel Campos da Silva',5, 'now', 'now');
insert into centro_de_custo(nome, nome_cc, gestor_cc, fonte_pagadora_id, data_cadastro, data_alteracao) values ('12303019','Microgrid','Samuel Campos da Silva',10, 'now', 'now');
insert into centro_de_custo(nome, nome_cc, gestor_cc, fonte_pagadora_id, data_cadastro, data_alteracao) values ('12303021','Reatores','Samuel Campos da Silva',9, 'now', 'now');
insert into centro_de_custo(nome, nome_cc, gestor_cc, fonte_pagadora_id, data_cadastro, data_alteracao) values ('12303020','Toledo','Samuel Campos da Silva',11, 'now', 'now');

insert into natureza_gasto(codigo, centro_de_custo_id, data_cadastro, data_alteracao) values ('IMOBILIZADO',1, 'now', 'now');
insert into natureza_gasto(codigo, centro_de_custo_id, data_cadastro, data_alteracao) values ('SERVIÇOS DE TERCEIROS',1, 'now', 'now');
insert into natureza_gasto(codigo, centro_de_custo_id, data_cadastro, data_alteracao) values ('DESPESAS GERAIS',1, 'now', 'now');
insert into natureza_gasto(codigo, centro_de_custo_id, data_cadastro, data_alteracao) values ('Materiais de Consumo',2, 'now', 'now');
insert into natureza_gasto(codigo, centro_de_custo_id, data_cadastro, data_alteracao) values ('Materiais e Equipamentos',2, 'now', 'now');
insert into natureza_gasto(codigo, centro_de_custo_id, data_cadastro, data_alteracao) values ('Viagens e Diárias',2, 'now', 'now');
insert into natureza_gasto(codigo, centro_de_custo_id, data_cadastro, data_alteracao) values ('Outros',2, 'now', 'now');
insert into natureza_gasto(codigo, centro_de_custo_id, data_cadastro, data_alteracao) values ('Serviços de Terceiros',2, 'now', 'now');
insert into natureza_gasto(codigo, centro_de_custo_id, data_cadastro, data_alteracao) values ('Materiais de Consumo',3, 'now', 'now');
insert into natureza_gasto(codigo, centro_de_custo_id, data_cadastro, data_alteracao) values ('Materiais e Equipamentos',3, 'now', 'now');
insert into natureza_gasto(codigo, centro_de_custo_id, data_cadastro, data_alteracao) values ('Viagens e Diárias',3, 'now', 'now');
insert into natureza_gasto(codigo, centro_de_custo_id, data_cadastro, data_alteracao) values ('Outros',3, 'now', 'now');
insert into natureza_gasto(codigo, centro_de_custo_id, data_cadastro, data_alteracao) values ('Serviços de Terceiros',3, 'now', 'now');
insert into natureza_gasto(codigo, centro_de_custo_id, data_cadastro, data_alteracao) values ('Equipamentos e imobilizados',4, 'now', 'now');
insert into natureza_gasto(codigo, centro_de_custo_id, data_cadastro, data_alteracao) values ('Serviços de terceiros',4, 'now', 'now');
insert into natureza_gasto(codigo, centro_de_custo_id, data_cadastro, data_alteracao) values ('Despesas de viagens',4, 'now', 'now');
insert into natureza_gasto(codigo, centro_de_custo_id, data_cadastro, data_alteracao) values ('Despesas gerais',4, 'now', 'now');
insert into natureza_gasto(codigo, centro_de_custo_id, data_cadastro, data_alteracao) values ('Equipamentos e imobilizados',5, 'now', 'now');
insert into natureza_gasto(codigo, centro_de_custo_id, data_cadastro, data_alteracao) values ('Serviços de terceiros',5, 'now', 'now');
insert into natureza_gasto(codigo, centro_de_custo_id, data_cadastro, data_alteracao) values ('Despesas gerais',5, 'now', 'now');
insert into natureza_gasto(codigo, centro_de_custo_id, data_cadastro, data_alteracao) values ('Despesas de viagens',5, 'now', 'now');
insert into natureza_gasto(codigo, centro_de_custo_id, data_cadastro, data_alteracao) values ('Despesas gerais',6, 'now', 'now');
insert into natureza_gasto(codigo, centro_de_custo_id, data_cadastro, data_alteracao) values ('Materiais de Consumo',6, 'now', 'now');
insert into natureza_gasto(codigo, centro_de_custo_id, data_cadastro, data_alteracao) values ('PASSAG.NAC./ LOC.NAC',6, 'now', 'now');
insert into natureza_gasto(codigo, centro_de_custo_id, data_cadastro, data_alteracao) values ('DIÁRIAS NAC.',6, 'now', 'now');
insert into natureza_gasto(codigo, centro_de_custo_id, data_cadastro, data_alteracao) values ('SERV.TERCEIRO PJ',6, 'now', 'now');
insert into natureza_gasto(codigo, centro_de_custo_id, data_cadastro, data_alteracao) values ('INSTALAÇÕES',6, 'now', 'now');
insert into natureza_gasto(codigo, centro_de_custo_id, data_cadastro, data_alteracao) values ('MÓVEIS EQUIPAM-MP',6, 'now', 'now');