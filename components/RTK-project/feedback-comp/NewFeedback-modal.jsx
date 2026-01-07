'use client'
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
import { DropdownStatus } from "./dropdownStatus";
import { Dropdown_category } from "./Dropdown_category";
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react";

export function NewFeedBackModal() {
    const [title, setTitle] = useState('title')
    const [status, setStatus] = useState('')
    const [description, setDescription] = useState('')
    const handelsubmit = (e) => {
        e.preventDefault();
        console.log({title, categore, status, description});
    }
  return (
    <Dialog>
      <form onSubmit={handelsubmit}>
        <DialogTrigger asChild>
          <Button className="bg-blue-500 hover:bg-blue-800 text">
            + Add FeedBack
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className='text-2xl'>Create New Feedback</DialogTitle>
            {/* <DialogDescription>
              Create New Feedback
            </DialogDescription> */}
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Feedback title</Label>
              <Input
                id="name-1"
                name="name"
                defaultValue="Add a short description headline"
              />
            </div>
            
            <div className="grid gap-3">
              <Label htmlFor="username-1">Category</Label>
              {/* -----------dropdown-------------- */}
              <Dropdown_category />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Status</Label>
              {/* <Input id="username-1" name="username" defaultValue="@peduarte" /> */}
              {/* -----------dropdown-------------- */}
              <DropdownStatus />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="name-1">Feedback Description</Label>
              <Textarea
                id="name-1"
                name="name"
                defaultValue="Add a short description headline"
              />
            </div>
            
          </div>
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
}
