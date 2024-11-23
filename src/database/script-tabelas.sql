-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/
CREATE DATABASE OneFormula;

USE OneFormula;

CREATE TABLE usuario(
idusuario int primary key auto_increment,
nome varchar(100),
email varchar(100),
senha varchar(20)
);


CREATE TABLE pergunta (
idPergunta INT AUTO_INCREMENT PRIMARY KEY,
titulo VARCHAR(100) NOT NULL,
respostaCorreta VARCHAR(45) NOT NULL,
opc1 VARCHAR(45),
opc2 VARCHAR(45),
opc3 VARCHAR(45),
opc4 VARCHAR(45)
);

CREATE TABLE resposta (
idResposta INT AUTO_INCREMENT PRIMARY KEY,
idPergunta INT NOT NULL,
idusuario INT NOT NULL,
isCorreto CHAR(1),
FOREIGN KEY (idPergunta) REFERENCES pergunta(idPergunta),
FOREIGN KEY (idusuario) REFERENCES usuario(idusuario) 
);

INSERT INTO pergunta (titulo, respostaCorreta, opc1, opc2, opc3, opc4) VALUES
("Qual foi o primeiro país africano a sediar uma corrida de F1?", "alternativaC", "Egito", "Tunísia", "Marrocos", "África do Sul"),
("Quantas mulheres já participaram da F1?", "alternativaA", "Nove", "Seis", "Oito", "Sete"),
("Qual década ficou conhecida com Era Britânica?", "alternativaB", "1970", "1960", "1990", "1950"),
("Quem foi o primeiro brasileiro campeão da F1?", "alternativaC", "José Carlos Pace", "Wilson Fittipaldi", "Emerson Fittipaldi", "Nelson Piquet"),
("Quando foi realizada a primeira corrida de Fórmula 1 no Brasil?", "alternativaB", "Autódromo de Jacarepaguá em 1978", "Autódromo de Interlagos em 1972", "Autódromo de Jacarepaguá em 1973", "Autódromo de Interlagos em 1979"),
("Qual é a rivalidade que foi considerada a maior da história da Fórmula 1?", "alternativaD", "Alain Prost e Nigel Mansell", "Ayrton Senna e Nelson Piquet", "Nigel Mansell e Ayrton Senna", "Ayrton Senna e Alain Prost"),
("Qual piloto foi campeão pilotando por quatro equipes?", "alternativaA", "Juan Manuel Fangio", "Alberto Ascari", "Giuseppe Farina", "Luigi Fagioli"),
("Qual foi o Pit Stop mais rápido da história?", "alternativaB", "Red Bull 1,82 segundo", "McLaren 1,80 segundo", "Ferrari 2,10 segundo", "Red Bull 1,98 segundo"),
("Um piloto perde uma média de quantos kgs durante uma corrida?", "alternativaA", "2kgs", "1kg", "1.5kgs", "3kgs"),
("O piloto mais jovem a ser campeão mundial de Fórmula 1 é:", "alternativaD", "Lando Norris", "Max Verstappen", "Emerson Fittipaldi", "Sebastian Vettel"),
("Quem ficou conhecido como Rei de Mônaco?", "alternativaA", "Ayrton Senna", "Graham Hill", "Michael Schumacher", "Lewis Hamilton");

SELECT * FROM usuario;
