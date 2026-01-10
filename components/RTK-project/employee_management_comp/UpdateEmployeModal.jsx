import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateEmployee } from "../../../app/slice/employee/employeeSlice";

export function UpdateEmployeeModal({ id, open, setOpen }) {
  const dispatch = useDispatch();
  const employee = useSelector((state) =>
    state.employees.employees.find((emp) => emp.id === id)
  );

  // const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("");

  // Reset form when modal opens with employee data
  useEffect(() => {
    if (!open || !employee) return;
    if (open && employee) {
      setName(employee.name);
      setEmail(employee.email);
      setPhone(employee.phone);
      setPosition(employee.position);
    }
  }, [open, employee]);

  const emp = {
    id : id,
    name,
    email,
    phone,
    position,
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !position) return;
    dispatch(updateEmployee(emp));
    setOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-bold">
            Update Employee Details
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handelSubmit}>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                className="text-stone-800"
                placeholder="Enter employee name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                className="text-stone-800"
                placeholder="Enter employee email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="phone">Phone no.</Label>
              <Input
                id="phone"
                className="text-stone-800"
                placeholder="Enter employee phone no."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="position">Position</Label>
              <Input
                id="position"
                className="text-stone-800"
                placeholder="Enter employee position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter className="pt-2">
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

export default UpdateEmployeeModal;
