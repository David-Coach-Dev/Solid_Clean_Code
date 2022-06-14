(() => {
  //Tupe
  type Gender = 'M' | 'F';
  //Class Person
  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date
    ) {}
  }
  //Class User
  class User extends Person {
    public lastAccess: Date;
    constructor(
      public email: string,
      public role: string,
      name: string,
      gender: Gender,
      birthdate: Date,
    ) {
      super(name, gender, birthdate);
      this.lastAccess = new Date();
    }
    checkCredentials() {
      return true;
    }
  }
  //Class User Settings
  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthdate: Date,
    ) {
      super(email, role, name, gender, birthdate);
    }
  }
  //code
  const userSettings = new UserSettings(
    '/usr/home',
    '/home',
    'Dc_Dev@dc_dev.com',
    'Admin',
    'Dc_Dev',
    'M',
    new Date('1982-04-14')
  );
  //print for console
  console.log({ userSettings });
})();
