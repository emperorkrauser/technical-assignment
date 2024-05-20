export class AppRepository {
  public async browse() {
    try {
      return [{
        id: "1",
        title: "title",
        description: "description-"
      }]
    } catch (error) {
      console.error(error)
    }
  }

  public async browseOne(uuid: string) {
    try {
      return {
        id: "1",
        title: "title",
        description: "description-"
      }
    } catch (error) {
      console.error(error)
    }
  }

  public async update(id: string, data: {}) {
    try {
      return {
        id: "1",
        title: "title",
        description: "description-"
      }
    } catch (error) {
      console.error(error);
    }
  }

  public async add(data: {}) {
    try {
      return {
        id: "1",
        title: "title",
        description: "description-"
      }
    } catch (error) {
      console.error(error);
    }
  }

  public async delete(id: string) {
    try {
      return {
        id: "1",
        title: "title",
        description: "description-"
      }
    } catch (error) {
      console.error(error);
    }
  }
}

