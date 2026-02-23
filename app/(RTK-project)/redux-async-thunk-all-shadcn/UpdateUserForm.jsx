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
import { UpdateUsername } from "../../slice/Async-thunk-all-methods/UsernameSlice";
import { istDateTime } from "../../../lib/formate";

const UpdateUserForm = ({ usernamedata }) => {
  const dispatch = useDispatch();

  const fields = [
    { label: "Name", key: "name" },
    { label: "Username", key: "username" },
    { label: "Email", key: "email" },
  ];

  const [edit, setEdit] = useState(false);
  const [user, setUser] = useState({});

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
    dispatch(UpdateUsername({ ...user, updatedAt: istDateTime }));
    setEdit(false);
  };

  const handleEdit = () => {
    setEdit(true);
    setUser(usernamedata);
    console.log('edit');
    
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">View</Button>
      </DialogTrigger>

      <DialogContent>
        <form onSubmit={handleFormSubmit}>
          <DialogHeader>
            <DialogTitle>Edit User</DialogTitle>
            <DialogDescription>
              Update your profile details.
            </DialogDescription>
          </DialogHeader>

          <FieldGroup className="my-4 flex flex-col gap-4">
            {fields.map(({ label, key }) => (
              <Field key={key}>
                {edit ? (
                  <>
                    <Label htmlFor={key}>{label}</Label>
                    <Input
                      id={key}
                      name={key}
                      value={user[key] ?? ""}
                      onChange={getData}
                      disabled={key === "email"}
                      required={key !== "email"}
                    />
                  </>
                ) : (
                  <p>
                    <strong>{label}:</strong>{" "}
                    {usernamedata?.[key] || "—"}
                  </p>
                )}
              </Field>
            ))}

            {edit && (
              <>
                <Label>Gender</Label>
                <Select
                  value={user.gender || ""}
                  onValueChange={handleGenderChange}
                >
                  <SelectTrigger>
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
              </>
            )}
          </FieldGroup>

          <DialogFooter>
            <DialogClose asChild>
              <Button
                variant="outline"
                onClick={() => {
                  setEdit(false);
                  setUser({});
                }}
              >
                Cancel
              </Button>
            </DialogClose>

            {edit ? (
              <Button type="submit">Save</Button>
            ) : (
              <Button onClick={handleEdit}>Edit</Button>
            )}
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateUserForm;