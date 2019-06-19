import {Component, OnInit, ViewChild} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {StoryImageModel} from '../../../shared/services/stories/story-image.model';
import {FileUploaderEvent} from '../../../shared/components/mass-file-uploader/file-uploader.event';
import {StoryModel} from '../../../shared/services/stories/story.model';
import {ModalService} from '../../../shared/services/modal-service/modal.service';
import {SnackbarService} from '../../../shared/services/snackbar/snackbar.service';
import {NgForm} from '@angular/forms';
import {StoryService} from '../../../shared/services/stories/story.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-story',
  templateUrl: './new-story.component.html',
  styleUrls: ['./new-story.component.scss']
})
export class NewStoryComponent implements OnInit {
    story: StoryModel;

    allowedImageExtensions = ['.png', '.jpg', '.jpeg', '.bmp'];
    imageAPIUrl = `${environment.reviveORAPIUrl}images`;

    @ViewChild('f') form: NgForm;

    constructor(private modalService: ModalService,
                private snackbarService: SnackbarService,
                private storyService: StoryService,
                private router: Router) {
    }

    ngOnInit() {
        this.story = {
            storyTitle: '',
            storyContent: '',
            status: '',
            images: [],
        } as StoryModel;
    }


    onImageUploaded(event: FileUploaderEvent) {
        this.story.images.push(event.response);
    }

    onImageUploadError(event: FileUploaderEvent) {
        this.snackbarService.show('An error occurred during the upload of your file. ' +
            'Please make sure the image file size is below the maximum file size of 5MB or please try again later.', 7500);
    }

    onShareButtonClicked() {
        document.getElementById('submitform').classList.add('submitted');
        if (this.form.valid) {
            this.modalService.confirm('Are you sure?'). subscribe((confirmed) => {
                if (confirmed) {
                    this.storyService.postStory(this.story).subscribe((res) => {
                        this.router.navigate(['/stories']);
                        this.snackbarService.show('Your story has been submitted succesfully. After approval it will be visible on this platform!');
                    }, (err) => {
                        this.snackbarService.show('Something went wrong while saving your changes');
                    });
                }
            });
        } else {
            this.snackbarService.show('Please fill out all required fields');
        }
    }
}
