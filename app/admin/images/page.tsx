'use client';

import React from "react"

import { useState } from 'react';
import { getAllImages, ProjectImage } from '@/lib/images';
import { Upload } from 'lucide-react';

export default function ImagesAdminPage() {
  const [images, setImages] = useState<ProjectImage[]>(getAllImages());
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    setUploading(true);
    setMessage(null);

    try {
      for (const file of Array.from(files)) {
        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch('/api/images', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          throw new Error('Upload failed');
        }

        const data = await response.json();
        console.log('Uploaded:', data);
      }

      setMessage({ type: 'success', text: 'Images uploaded successfully!' });
      // Refresh images list
      setImages(getAllImages());
    } catch (error) {
      setMessage({ type: 'error', text: 'Upload failed. Please try again.' });
      console.error(error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <main className="min-h-screen bg-background pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-foreground mb-8">Image Management</h1>

          {/* Upload Section */}
          <div className="mb-12 p-8 border-2 border-dashed border-muted-foreground rounded-lg">
            <div className="flex flex-col items-center gap-4">
              <Upload className="w-12 h-12 text-secondary" />
              <div className="text-center">
                <label htmlFor="file-upload" className="cursor-pointer">
                  <span className="text-lg font-semibold text-foreground hover:text-secondary transition-colors">
                    Click to upload images
                  </span>
                </label>
                <input
                  id="file-upload"
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleFileUpload}
                  disabled={uploading}
                  className="hidden"
                />
                <p className="text-sm text-muted-foreground mt-2">
                  or drag and drop your images here
                </p>
              </div>
              {uploading && <p className="text-sm text-secondary">Uploading...</p>}
            </div>
          </div>

          {/* Message */}
          {message && (
            <div
              className={`mb-6 p-4 rounded-lg ${
                message.type === 'success'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}
            >
              {message.text}
            </div>
          )}

          {/* Images List */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Current Images</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image) => (
                <div key={image.id} className="bg-muted rounded-lg overflow-hidden">
                  <img
                    src={image.url || "/placeholder.svg"}
                    alt={image.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground mb-1">{image.title}</h3>
                    <p className="text-xs text-muted-foreground mb-2">{image.category}</p>
                    <p className="text-xs text-muted-foreground break-all">{image.url}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
