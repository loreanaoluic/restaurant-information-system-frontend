export class UpdateUser {
  dtype: string;
  name: string;
  lastName: string;
  emailAddress: string;
  username: string;
  salary: number;

  constructor(
    dtype: string,
    name: string,
    lastName: string,
    emailAddress: string,
    username: string,
    salary: string
  ) {
    this.dtype = dtype;
    this.name = name;
    this.lastName = lastName;
    this.emailAddress = emailAddress;
    this.username = username;
    this.salary = Number(salary);
  }
}
