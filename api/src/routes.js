import { Router } from "express";

const routes = Router();

routes.post("/certifications", async (req, res) => {
  const { producer } = req;
  const message = {
    user: { id: 1, name: "Gabriel Lima" },
    course: "Kafka com Node.js",
    grade: 5
  };
  // Chamar microsserviço
  await producer.send({
    topic: "issue-certificate",
    messages: [{ value: JSON.stringify(message) }]
  });

  console.log(req.producer);
  return res.json({ ok: true });
});

export default routes;
