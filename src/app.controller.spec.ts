import { Test, TestingModule } from "@nestjs/testing";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

describe("AppController", () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe("getBoiler", () => {
    it("should return Boiler", () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getBoiler())
        .toBe("<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQtFhiT13UrnLCkH1wIAalC_habI7mSfbn9g&usqp=CAU' />");
    });
  });

});
