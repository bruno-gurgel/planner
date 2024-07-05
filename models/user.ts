import prisma from "@/lib/db";

export class User {
  public id: string;
  public name: string | null = null;
  public email?: string;

  constructor(id: string) {
    this.id = id;

    try {
      this.fetchUser().then((user) => {
        this.name = user.name;
        this.email = user.email;
      });
    } catch (error) {
      throw error;
    }
  }

  async fetchUser() {
    const user = await prisma.user.findUnique({
      where: {
        id: this.id,
      },
    });

    if (!user) throw new Error("User not found");

    return user;
  }
}
