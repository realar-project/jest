import { mock } from "realar/jest";
import { notifier, api, user_form } from "./user-form";

test("should work", () => {
  const notifier_mock = mock(notifier);
  const api_mock = mock(api);

  const form = user_form("a", "b");

  api_mock.user_save.mockResolvedValue(0);

  form.save();
  expect(notifier_mock.fail).toHaveBeenCalled();
  expect(api_mock.user_save).toHaveBeenCalledWith("a", "b");

});
