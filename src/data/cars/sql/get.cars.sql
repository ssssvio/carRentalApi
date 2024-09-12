DECLARE @Entidade VARCHAR(100)

SET @Entidade = :Entidade

SELECT O.name FROM Sys.Tables O
WHERE (O.name = @Entidade)