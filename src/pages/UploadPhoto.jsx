import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const UploadPhoto = () => {
  const [photo, setPhoto] = useState(null);
  const [caption, setCaption] = useState("");

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
  };

  const handleSubmit = () => {
    // Handle photo upload logic here
    console.log("Photo:", photo);
    console.log("Caption:", caption);
  };

  return (
    <div className="text-center">
      <Dialog>
        <DialogTrigger asChild>
          <Button>Upload Photo</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Upload Photo</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Input type="file" onChange={handlePhotoChange} />
            <Textarea placeholder="Add a caption..." value={caption} onChange={handleCaptionChange} />
            <Button onClick={handleSubmit}>Submit</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UploadPhoto;