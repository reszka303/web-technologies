Wyłączony tryb bezpieczny
SET SQL_SAFE_UPDATES=0;

Włączony tryb bezpieczny
SET SQL_SAFE_UPDATES=1;

world database

Przeanalizuj strukturę bazy danych, a następnie zdefiniuj następujące zapytania:

1. wyświetl informację o wszystkich polskich miastach,

SELECT * FROM city WHERE CountryCode = "POL";

2. wyświetl informacje na temat miasta o największej populacji,

SELECT * FROM city WHERE Population = (SELECT MAX(Population) FROM city);

Rozwiązanie JavaStart

SELECT * FROM city ORDER BY Population DESC LIMIT 1;

3. wyświetl informacje na temat 3 krajów o największej populacji,

SELECT * FROM city ORDER BY Population DESC LIMIT 3;

4. wyświetl wszystkie języki używane w Stanach Zjednoczonych i posortuj je od najbardziej do najmniej popularnych,

SELECT * FROM countrylanguage
WHERE CountryCode = "USA"
ORDER BY Percentage DESC
;

5. zmień liczbę ludności w Warszawie na 1,7 miliona.

SELECT * FROM city WHERE Name = "Warszawa";

SET SQL_SAFE_UPDATES=0;

UPDATE city SET Population = "1700000" WHERE Name = "Warszawa";

Rozwiązanie JavaStart
Jeżeli w edytorze mamy włączony tryb safe updates, to trzeba wykorzystać klucz główny, czyli ID. Jeżeli go wyłączymy to możemy równie dobrze zapisać zapytanie wykorzystujące nazwę.

#1
UPDATE city SET Population = 1700000 WHERE ID = 2928;
#2
UPDATE city SET Population = 1700000 WHERE Name = 'Warszawa';


6. usuń z bazy danych informacje na temat Sosnowca.

SELECT * FROM city WHERE Name = "Warszawa";

SET SQL_SAFE_UPDATES=1;

UPDATE city SET Population = "1700001" WHERE Name = "Warszawa";
Error Code: 1175. You are using safe update mode and you tried to update a table without a WHERE that uses a KEY column.
    To disable safe mode, toggle the option in Preferences -> SQL Editor and reconnect.

                                         UPDATE city SET Population = "1765000" WHERE ID = 2928;

Rozwiązanie JavaStart
Podobnie jak wcześniej najpierw wyszukujemy Sosnowiec i usuwamy go na podstawie odnalezionego id:

#1
DELETE FROM city WHERE ID = 2941;
#2
DELETE FROM city WHERE Name = 'Sosnowiec';
