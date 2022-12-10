-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "lastName" TEXT
);

-- CreateTable
CREATE TABLE "Hacker" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "website" TEXT,
    "github" TEXT,
    "linkedin" TEXT,
    "softwareExperience" TEXT,
    "ethereumExperience" TEXT,
    "motivation" TEXT,
    "builtBefore" TEXT,
    "buildHackathon" TEXT,
    "conduct" BOOLEAN,
    "email" TEXT NOT NULL,
    CONSTRAINT "Hacker_email_fkey" FOREIGN KEY ("email") REFERENCES "User" ("email") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Partner" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "website" TEXT,
    "organization" TEXT,
    "linkedin" TEXT,
    "telegram" TEXT,
    "twitter" TEXT,
    "supportedBefore" TEXT,
    "whySupport" TEXT,
    "acceptRules" BOOLEAN,
    "email" TEXT NOT NULL,
    CONSTRAINT "Partner_email_fkey" FOREIGN KEY ("email") REFERENCES "User" ("email") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Mentor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "website" TEXT,
    "github" TEXT,
    "linkedin" TEXT,
    "telegram" TEXT,
    "twitter" TEXT,
    "softwareExperience" TEXT,
    "ethereumExperience" TEXT,
    "ethereumMentored" TEXT,
    "whyMentor" TEXT,
    "acceptRules" BOOLEAN,
    "email" TEXT NOT NULL,
    CONSTRAINT "Mentor_email_fkey" FOREIGN KEY ("email") REFERENCES "User" ("email") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Hacker_email_key" ON "Hacker"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Partner_email_key" ON "Partner"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Mentor_email_key" ON "Mentor"("email");
