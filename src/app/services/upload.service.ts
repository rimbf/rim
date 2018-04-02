import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2'
import { GalleryImage } from '../models/galleryImage.model'
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated'
import * as firebase from 'firebase';
import { Upload } from '../models/upload.model';

@Injectable()
export class UploadService {

  private basePath = '/uploads';
  private uploads: FirebaseListObservable<GalleryImage[]>

  constructor(private ngFire: AngularFireModule, private db: AngularFireDatabase) { }

  uploadFile(upload: Upload) {
    const storageRef = firebase.storage().ref();
    // $(this.basePath)
    const uploadTask = storageRef.child(`uploads/${upload.file.name}`).put(upload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      //three observers
      // 1 state changed observer
      (snapshot) => {
        // upload in Progress
        upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
        console.log(upload.progress);
      },
      //  error observer
      (error) => {
        //upload failed
        console.log(error);
      },
      //success observer
      (): any => {
        upload.url = uploadTask.snapshot.downloadURL;
        upload.name = upload.file.name;
        this.saveFileData(upload);
      });
  };

  saveFileData(upload: Upload) {
    this.db.list(`${this.basePath}/`).push(upload);
    console.log('file saved!' + upload.url);
  }
}


