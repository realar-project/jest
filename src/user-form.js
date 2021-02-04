import { prop, cache, shared } from "realar";

// Some real notifier service
export class Notifier {
  ok = () => console.log("ok");
  fail = () => console.log("fail");
}

// Some real external api gateway service
export class Api {
  async userSave(username, password) {
    // Some real post remote request to api
    await new Promise(r => setTimeout(r, 1000));
    console.log(username, password);
    return 1;
  }
}

// Tested form
export class UserForm {
  notifier = shared(Notifier)
  api = shared(Api);

  @prop username = '';
  @prop password = '';
  @prop proc = '';

  @cache get disabled() {
    return this.proc > 0;
  }

  constructor(username, password) {
    if (username) this.username = username;
    if (password) this.password = password;
  }

  async save() {
    this.proc ++;
    const res = await this.api.userSave(this.username, this.password);
    if (res) {
      this.notifier.ok();
    }
    else {
      this.notifier.fail();
    }
    this.proc --;
    return res;
  }

}
