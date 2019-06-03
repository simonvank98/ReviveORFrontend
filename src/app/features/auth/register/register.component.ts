import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {
    EmailValidation,
    PasswordValidation,
    RepeatPasswordErrorStateMatcher,
    RepeatPasswordValidator
} from '../../../shared/utilities/validators';
import {Subscription} from 'rxjs';
import {AuthenticationService} from '../../../shared/services/auth/authentication.service';
import {ORUserModel} from '../../../shared/services/user/or-user.model';
import {SnackbarService} from '../../../shared/services/snackbar/snackbar.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    formMatcher = new RepeatPasswordErrorStateMatcher();

    private routeSubscription: Subscription;
    private redirectTo: string;

    userForm = this.fb.group({
        email: ['', EmailValidation],
        password: ['', PasswordValidation],
        passwordConfirmation: [''],
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        address1: ['', Validators.required],
        address2: [''],
        city: ['', Validators.required],
        zipcode: ['', Validators.required],
        province: ['', Validators.required],
        country: ['', Validators.required]
    }, {validator: RepeatPasswordValidator});


    constructor(private fb: FormBuilder, private authService: AuthenticationService, private snackbarService: SnackbarService, private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        this.routeSubscription = this.route
            .queryParams
            .subscribe(params => {
                this.redirectTo = params['redirectTo'];
            });
    }

    onSubmit() {
        const user = <ORUserModel>this.userForm.value;
        this.authService.register(user).subscribe(
            (ok) => {
                this.authService.login(user.email, user.password).subscribe((ok2) => {
                        this.snackbarService.show(`You've successfully registered a new account and you're now logged in.`, 5000);
                        this.redirectTo = this.redirectTo ? this.redirectTo : '/';
                        this.router.navigate([this.redirectTo]);
                    },
                    (err) => {
                        this.snackbarService.show(`You've successfully registered a new account, please login.`, 5000);
                        this.router.navigate(['/login'],  { queryParamsHandling: 'preserve' });
                    });
            },
            (err2) => {
                this.snackbarService.show(`Something went wrong while registering your account. Please try again later.`, 5000);
            }
        );
    }

}
