export class NewUser {
  dtype: string;
  name: string;
  lastName: string;
  emailAddress: string;
  username: string;
  password: string;
  salary: number;
  deleted: boolean;

  constructor(
    dtype: string,
    name: string,
    lastName: string,
    emailAddress: string,
    username: string,
    password: string,
    salary: string
  ) {
    this.dtype = dtype;
    this.name = name;
    this.lastName = lastName;
    this.emailAddress = emailAddress;
    this.username = username;
    this.password = password;
    this.salary = Number(salary);
    this.deleted = false;
  }
}
