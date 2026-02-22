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
import { useState } from "react";
import { useDispatch } from "react-redux";
import { CreateUsername } from "../../slice/Async-thunk-all-methods/UsernameSlice";

const CreateUserForm = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({});

  const getData = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleGenderChange = (value) => {
    setUser((prev) => ({
      ...prev,
      gender: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // alert("FORM SUBMITTED"); // 👈 add this
    console.log("data:", user);
    dispatch(CreateUsername(user));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-blue-300 hover:bg-blue-500">
          Create User
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-sm">
        <form onSubmit={handleFormSubmit}>
          <DialogHeader>
            <DialogTitle className="font-bold text-2xl">
              Create New User
            </DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when youre done.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="New User"
                onChange={getData}
                required
              />
            </Field>
            <Field>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                name="username"
                placeholder="@user"
                onChange={getData}
                required
              />
            </Field>
            <Field>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                placeholder="user@gmail.com"
                onChange={getData}
                required
              />
            </Field>
            <div className="flex gap-4">
              <Label htmlFor="gender">Gender</Label>
              <Select onValueChange={handleGenderChange}>
                <SelectTrigger className="w-[180px]" id="gender">
                  <SelectValue placeholder="Gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateUserForm;
