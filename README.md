# Microsserviço com Node.js

- Utilizando Kafka;
- Utilizando Node;

## Aplicações

- API principal (Station);
- Geração de certificado;

## Fluxo

- Api principal envia uma mensagem para o serviço de certificado para gera-lo;
- Mocrosserviço de certificado devolve uma resposta (sincrona/assincrona);

Se conseguir sincrona/assincrona:

- Receber uma resposta assíncrona de quando o e-mail com o certificado foi enviado;

## O que sabemos?

- REST (latência);
- Redis / RabbitMQ / **Kafka**;

- Nubank, Uber, Paypal, Netflix;
