
import { NgModule } from '@angular/core';
// Exports all the basic Angular directives and pipes, such as NgIf, NgForOf, DecimalPipe, and so on.
import { CommonModule } from '@angular/common';
// Angular Material buttons are native <button> or <a> elements enhanced with Material Design styling and ink ripples
import { MatButtonModule } from '@angular/material/button';
// container for headers, titles, or actions.
import { MatToolbarModule } from '@angular/material/toolbar';
// makes it easier to use vector-based icons in your app.
// This directive supports both icon fonts and SVG icons, but not bitmap-based formats (png, jpg, etc.).
import { MatIconModule } from '@angular/material/icon';
// The layout package provides utilities to build responsive UIs that react to screen-size changes.
import { LayoutModule } from '@angular/cdk/layout';
// The sidenav components are designed to add side content to a fullscreen app.
import { MatSidenavModule } from '@angular/material/sidenav';
// <mat-list> is a container component that wraps and formats a series of line items
import { MatListModule } from '@angular/material/list';
// <mat-menu> is a floating panel containing list of options.
import { MatMenuModule } from '@angular/material/menu';
// <mat-card> is a content container for text, photos, and actions in the context of a single subject.
import { MatCardModule } from '@angular/material/card';
// <mat-form-field> is a component used to wrap several Angular Material components and apply common 
// text field styles such as the underline, floating label, and hint messages.
import { MatFormFieldModule } from '@angular/material/form-field';
// matInput is a directive that allows native <input> and <textarea> elements to work with <mat-form-field>.
import { MatInputModule } from '@angular/material/input';
// MatSnackBar is a service for displaying snack-bar notifications.
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ShellComponent } from './shell/shell.component';


const sharedComponents =
[
  ShellComponent
]

const sharedModules = 
[ CommonModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  LayoutModule,
  MatSidenavModule,
  MatListModule,
  MatMenuModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSnackBarModule
]

@NgModule({
  declarations: [
    ...sharedComponents
  ],
  imports: [
    ...sharedModules
  ],
  exports: [
    ...sharedModules,
    ...sharedComponents
  ]
})

export class SharedModule { }
