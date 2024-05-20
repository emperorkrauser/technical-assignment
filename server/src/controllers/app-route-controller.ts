import { AppService } from "../services";

export class AppController {
  public AppService: AppService;
  constructor() {
    this.AppService = new AppService();
  }
  public static async browse() {
    try {
      const result = await AppService.browse();
      return result;
    } catch (error) {
      console.error(error);
    }
  }

  public static async browseOne(uuid: string) {
    try {
      const result = await AppService.browseOne(uuid);
      return result;
    } catch (error) {
      console.error(error);
    }
  }

  public static async update(id: string, data: {}) {
    try {
      const result = await AppService.update(id, data);
      return result;
    } catch (error) {
      console.error(error);
    }
  }

  public static async add(data: {}) {
    try {
      const result = await AppService.add(data);
      return result;
    } catch (error) {
      console.error(error);
    }
  }

  public static async delete(id: string) {
    try {
      const result = await AppService.delete(id);
      return result;
    } catch (error) {
      console.error(error);
    }
  }
}