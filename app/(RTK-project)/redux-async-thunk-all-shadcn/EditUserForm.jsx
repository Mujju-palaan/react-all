import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { UpdateUsername } from "../../slice/Async-thunk-all-methods/UsernameSlice";
import { istDateTime } from "../../../lib/formate";

const EditUserForm = ({ userdata }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});

  const fields = [
    { label: "Name", key: "name" },
    { label: "Username", key: "username" },
    { label: "Email", key: "email" },
  ];

  useEffect(() => {
    if (userdata) {
      setUser(userdata);
    }
  }, [userdata]);

  const handleOpenChange = (nextOpen) => {
    setOpen(nextOpen);
    if (nextOpen) {
      setUser(userdata ?? {});
    }
  };

  const getData = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
      updatedAt: istDateTime(),
    }));
  };

  const handleGenderChange = (value) => {
    setUser((prev) => ({
      ...prev,
      gender: value,
      updatedAt: istDateTime(),
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(UpdateUsername({ id: userdata.id, ...user }));
    setOpen(false);
  };

  const handleCancel = () => {
    setUser(userdata ?? {});
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-blue-300 hover:bg-blue-500">
          Update User
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-sm">
        <form onSubmit={handleFormSubmit}>
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Edit User</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>

          <FieldGroup className="my-4 flex flex-col gap-3">
            {fields.map((f) => (
              <Field key={f.key}>
                <Label htmlFor={f.key}>{f.label}</Label>
                <Input
                  id={f.key}
                  name={f.key}
                  value={user?.[f.key] ?? ""}
                  onChange={getData}
                  disabled={f.key === "email"}
                  required={f.key !== "email"}
                />
              </Field>
            ))}

            <Field>
              <Label htmlFor="gender">Gender</Label>
              <Select value={user?.gender ?? ""} onValueChange={handleGenderChange}>
                <SelectTrigger id="gender">
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>
          </FieldGroup>

          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline" onClick={handleCancel}>
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditUserForm;
