"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { DropdownStatus } from "./dropdownStatus";
import { Dropdown_category } from "./Dropdown_category";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFeedback } from "../../../app/slice/feedback/feedbackSlice";

export function NewFeedBackModal() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !category || !status || !description) return;
    
    const feed = {
      title,
      category,
      status,
      description,
    };

    dispatch(addFeedback(feed));
    // console.log('feed:',feed)
    setTitle("");
    setCategory("");
    setStatus("");
    setDescription("");
    setOpen(false); // ✅ close dialog
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-blue-500 hover:bg-blue-800">
          + Add Feedback
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Create New Feedback</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-3">
            <Label htmlFor="feedback-title">Feedback Title</Label>
            <Input
              id="feedback-title"
              value={title}
              placeholder="Add a short description headline"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="grid gap-3">
            <Label>Category</Label>
            <Dropdown_category category={category} setCategory={setCategory} />
          </div>

          <div className="grid gap-3">
            <Label>Status</Label>
            <DropdownStatus status={status} setStatus={setStatus} />
          </div>

          <div className="grid gap-3">
            <Label htmlFor="feedback-description">Feedback Description</Label>
            <Textarea
              id="feedback-description"
              value={description}
              placeholder="Describe your feedback in detail"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" type="button">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
