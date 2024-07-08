import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";

const mockUploadPhoto = async ({ photo, caption }) => {
  // Simulate an API call to upload the photo
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.2) {
        resolve({ success: true });
      } else {
        reject(new Error("Failed to upload photo"));
      }
    }, 1000);
  });
};

const UploadPhoto = () => {
  const [photo, setPhoto] = useState(null);
  const [caption, setCaption] = useState("");

  const mutation = useMutation({
    mutationFn: mockUploadPhoto,
    onSuccess: () => {
      toast("Photo uploaded successfully!");
      setPhoto(null);
      setCaption("");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
  };

  const handleSubmit = () => {
    if (photo && caption) {
      mutation.mutate({ photo, caption });
    } else {
      toast.error("Please select a photo and add a caption.");
    }
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
            <Button onClick={handleSubmit} disabled={mutation.isLoading}>
              {mutation.isLoading ? "Uploading..." : "Submit"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UploadPhoto;