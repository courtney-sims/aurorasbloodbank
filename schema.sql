DROP TABLE IF EXISTS Cats;
-- Timestamp looks like: 2025-01-09 19:03:04
CREATE TABLE IF NOT EXISTS Cats (CatId INTEGER PRIMARY KEY, CatName TEXT NOT NULL, LastDonated DATETIME DEFAULT NULL);
INSERT INTO Cats (CatId, CatName, LastDonated) VALUES (1, 'Luna', NULL), (2, "Aurora", current_timestamp);