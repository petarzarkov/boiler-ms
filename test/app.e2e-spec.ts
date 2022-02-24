import { Test } from "@nestjs/testing";
import { AppModule } from "./../src/app.module";
import { FastifyAdapter, NestFastifyApplication } from "@nestjs/platform-fastify";

describe("AppController (e2e)", () => {
  let app: NestFastifyApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication<NestFastifyApplication>(new FastifyAdapter());
    await app.init();
  });

  it("/GET", () => {
    return app
      .inject({
        method: "GET",
        url: "/",
      })
      .then(({ payload }) => expect(payload).toEqual("<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQtFhiT13UrnLCkH1wIAalC_habI7mSfbn9g&usqp=CAU' />"));
  });

  afterAll(async () => {
    await app.close();
  });
});
