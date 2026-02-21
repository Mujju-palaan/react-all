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

const CreateUserForm = () => {
  const [user, setUser] = useState({})

  const update = (e) =>{
    setUser([e.target.value] = [e.target.name])
  }

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline" className="bg-blue-300 hover:bg-blue-500">
            Create User
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
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
              <Input id="name" name="name" placeholder="New User" />
            </Field>
            <Field>
              <Label htmlFor="username">Username</Label>
              <Input id="username" name="username" placeholder="@user" />
            </Field>
            <Field>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" placeholder="user@gmail.com" />
            </Field>
            <div className="flex gap-4">
              <Label htmlFor="gender">Gender</Label>
              <Select>
                <SelectTrigger className="w-[180px]">
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
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default CreateUserForm;
