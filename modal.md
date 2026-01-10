```
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddEmployee,removeEmployee } from "../../../app/slice/employee/employeeSlice";

export function NewEmployeeModal() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("");

  const emp = {
    name,
    email,
    phone,
    position,
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !position) return;
    dispatch(AddEmployee(emp))
    setName('')
    setEmail('')
    setPhone('')
    setPosition('')
    setOpen(false)
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="btn text-[12px]">
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-bold">Add New Employee</DialogTitle>
        </DialogHeader>
        <form onSubmit={handelSubmit}>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                className="text-stone-500"
                placeholder="Enter employee name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                className="text-stone-500"
                placeholder="Enter employee email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="phone">Phone no.</Label>
              <Input
                id="phone"
                className="text-stone-500"
                placeholder="Enter employee phone no."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="position">Position</Label>
              <Input
                id="position"
                className="text-stone-500"
                placeholder="Enter employee position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter className='pt-2'>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default NewEmployeeModal;

```