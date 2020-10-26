import { mock } from "realar";
import { Notifier, Api, UserForm } from "./user-form";

test("User form should work", async () => {
  const notifierMock = mock(Notifier);
  const apiMock = mock(Api);

  const form = UserForm("a", "b");

  apiMock.userSave.mockResolvedValue(0);

  await form.save();
  expect(notifierMock.fail).toHaveBeenCalled();
  expect(apiMock.userSave).toHaveBeenCalledWith("a", "b");
});
