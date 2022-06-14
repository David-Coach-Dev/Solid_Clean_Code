(() => {
  //Aplicando el principio de responsabilidad única
  //Priorizar la composición en lugar de herencia!
  //Type
  type Gender = "M" | "F";
  //Interface Props
  interface PersonProps {
    name: string;
    gender: Gender;
    birthdate: Date;
  }
  //Class Person
  class Person {
    public birthdate: Date;
    public gender: Gender;
    public name: string;
    constructor({ name, gender, birthdate }: PersonProps) {
      this.birthdate = birthdate;
      this.gender = gender;
      this.name = name;
    }
  }
  //Interfaces Props
  interface UserProps {
    email: string;
    role: string;
  }
  //Class User
  class User {
    public email: string;
    public lastAccess: Date;
    public role: string;
    constructor({ email, role }: UserProps) {
      this.email = email;
      this.lastAccess = new Date();
      this.role = role;
    }
    checkCredentials() {
      return true;
    }
  }
  //Interface Props
  interface SettingProps {
    lastOpenFolder: string;
    workingDirectory: string;
  }
  //Class User Settings
  class Settings {
    public workingDirectory: string;
    public lastOpenFolder: string;
    constructor({ lastOpenFolder, workingDirectory }: SettingProps) {
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }
  //inetrface User Settings
  interface UserSettingProps {
    birthdate: Date;
    email: string;
    gender: Gender;
    lastOpenFolder: string;
    name: string;
    role: string;
    workingDirectory: string;
  }
  //class User Settings
  class UserSettings {
    public person: Person;
    public user: User;
    public settings: Settings;
    constructor({
      name,
      gender,
      birthdate,
      email,
      role,
      lastOpenFolder,
      workingDirectory,
    }: UserSettingProps) {
      this.person = new Person({ name, gender, birthdate });
      this.user = new User({ email, role });
      this.settings = new Settings({ lastOpenFolder, workingDirectory });
    }
  }
  const userSettings = new UserSettings({
    birthdate: new Date("1982-04-14"),
    email: "Dc_Dev@dc_dev.com",
    gender: "M",
    lastOpenFolder: "/home",
    name: "Dc_Dev",
    role: "Admin",
    workingDirectory: "/usr/home",
  });
  //print for console
  console.log({ userSettings });
})();
