import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.get("/user", async (req: Request, res: Response) => {
  const { email } = req.query;

  const response = await prisma.user.findFirst({
    where: {
      email: email as string,
    },
    include: {
      Hacker: true,
      Partner: true,
      Mentor: true,
    },
  });

  res.send(response);
});

app.post("/user", async (req: Request, res: Response) => {
  const { email, name, lastName } = req.body;

  const response = await prisma.user.create({
    data: {
      email,
      name,
      lastName,
    },
  });

  res.send(response);
});

app.put("/user", async (req: Request, res: Response) => {
  const { email, name, lastName } = req.body;

  const response = await prisma.user.update({
    where: {
      email,
    },
    data: {
      name,
      lastName,
    },
  });

  res.send(response);
});

app.get("/hacker", async (req: Request, res: Response) => {
  const { email } = req.query;

  const response = await prisma.hacker.findFirst({
    where: {
      email: email as string,
    },
  });

  res.send(response);
});

app.post("/hacker", async (req: Request, res: Response) => {
  const {
    website,
    github,
    linkedin,
    softwareExperience,
    ethereumExperience,
    motivation,
    builtBefore,
    buildHackathon,
    conduct,
    email,
  } = req.body;

  const response = await prisma.hacker.create({
    data: {
      website,
      github,
      linkedin,
      softwareExperience,
      ethereumExperience,
      motivation,
      builtBefore,
      buildHackathon,
      conduct,
      email,
    },
  });

  res.send(response);
});

app.put("/hacker", async (req: Request, res: Response) => {
  const {
    email,
    website,
    github,
    linkedin,
    softwareExperience,
    ethereumExperience,
    motivation,
    builtBefore,
    buildHackathon,
    conduct,
  } = req.body;

  const response = await prisma.hacker.update({
    where: {
      email,
    },
    data: {
      website,
      github,
      linkedin,
      softwareExperience,
      ethereumExperience,
      motivation,
      builtBefore,
      buildHackathon,
      conduct,
    },
  });

  res.send(response);
});

app.get("/partner", async (req: Request, res: Response) => {
  const { email } = req.query;

  const response = await prisma.partner.findFirst({
    where: {
      email: email as string,
    },
  });

  res.send(response);
});

app.post("/partner", async (req: Request, res: Response) => {
  const {
    website,
    organization,
    linkedin,
    telegram,
    twitter,
    supportedBefore,
    whySupport,
    acceptRules,
    email,
  } = req.body;

  const response = await prisma.partner.create({
    data: {
      website,
      organization,
      linkedin,
      telegram,
      twitter,
      supportedBefore,
      whySupport,
      acceptRules,
      email,
    },
  });

  res.send(response);
});

app.put("/partner", async (req: Request, res: Response) => {
  const {
    email,
    website,
    organization,
    linkedin,
    telegram,
    twitter,
    supportedBefore,
    whySupport,
    acceptRules,
  } = req.body;

  const response = await prisma.partner.update({
    where: {
      email,
    },
    data: {
      website,
      organization,
      linkedin,
      telegram,
      twitter,
      supportedBefore,
      whySupport,
      acceptRules,
    },
  });

  res.send(response);
});

app.get("/mentor", async (req: Request, res: Response) => {
  const { email } = req.query;

  const response = await prisma.mentor.findFirst({
    where: {
      email: email as string,
    },
  });

  res.send(response);
});

app.post("/mentor", async (req: Request, res: Response) => {
  const {
    email,
    website,
    github,
    linkedin,
    telegram,
    twitter,
    softwareExperience,
    ethereumExperience,
    ethereumMentored,
    whyMentor,
    acceptRules,
  } = req.body;

  const response = await prisma.mentor.create({
    data: {
      email,
      website,
      github,
      linkedin,
      telegram,
      twitter,
      softwareExperience,
      ethereumExperience,
      ethereumMentored,
      whyMentor,
      acceptRules,
    },
  });

  res.send(response);
});

app.put("/mentor", async (req: Request, res: Response) => {
  const {
    email,
    website,
    github,
    linkedin,
    telegram,
    twitter,
    softwareExperience,
    ethereumExperience,
    ethereumMentored,
    whyMentor,
    acceptRules,
  } = req.body;

  const response = await prisma.mentor.update({
    where: {
      email,
    },
    data: {
      email,
      website,
      github,
      linkedin,
      telegram,
      twitter,
      softwareExperience,
      ethereumExperience,
      ethereumMentored,
      whyMentor,
      acceptRules,
    },
  });

  res.send(response);
});

const main = async () => {
  app.listen(3030, () => {
    console.log("Example app listening on port 3030!");
  });
};

main();
