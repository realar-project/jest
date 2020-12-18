### Realar Jest example

Example of easy unit testing with [Realar](https://github.com/betula/realar).

```javascript
import { mock } from "realar";
import { Notifier, Api, UserForm } from "./user-form";

test("User form should work", async () => {
  const notifierMock = mock(Notifier, {
    fail: jest.fn()
  });
  const apiMock = mock(Api, {
    userSave: jest.fn().mockResolvedValue(0)
  });

  const form = new UserForm("a", "b");

  await form.save();
  expect(notifierMock.fail).toHaveBeenCalled();
  expect(apiMock.userSave).toHaveBeenCalledWith("a", "b");
});
```

Installation

```bash
  git clone git@github.com:realar-project/realar-jest.git
  cd realar-jest
  npm run start
```
