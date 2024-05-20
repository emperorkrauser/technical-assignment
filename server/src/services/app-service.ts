import { AppRepository } from "../repositories"

function getRepository(){  
  return new AppRepository(); 
}
export class AppService {
  public static async browse() {
    try {
      const result = await getRepository().browse();
      return result;
    } catch (error) {
      console.error(error);
    }
  }

  public static async browseOne(uuid: string) {
    try {
      const result = await getRepository().browseOne(uuid);
      return result;
    } catch (error) {
      console.error(error);
    }
  }

  public static async update(id: string, data: {}) {
    try {
      const result = await getRepository().update(id, data);
      return result;
    } catch (error) {
      console.error(error);
    }
  }

  public static async add(data: {}) {
    try {
      const result = await getRepository().add(data);
      return result;
    } catch (error) {
      console.error(error);
    }
  }

  public static async delete(id: string) {
    try {
      const result = await getRepository().delete(id);
      return result;
    } catch (error) {
      console.error(error);
    }
  }
}