import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pens',
  template: `
    <div class="row">
      <div class="col s12 m4">
        <div class="card">
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" src="../../../assets/img/office.jpg" />
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4"
              >Card Title<i class="material-icons right">more_vert</i></span
            >
            <p><a href="#">This is a link</a></p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4"
              >Card Title<i class="material-icons right">close</i></span
            >
            <p>
              Here is some more information about this product that is only
              revealed once clicked on.
            </p>
          </div>
        </div>
      </div>
      <div class="col s12 m4">
        <div class="card">
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" src="../../../assets/img/office.jpg" />
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4"
              >Card Title<i class="material-icons right">more_vert</i></span
            >
            <p><a href="#">This is a link</a></p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4"
              >Card Title<i class="material-icons right">close</i></span
            >
            <p>
              Here is some more information about this product that is only
              revealed once clicked on.
            </p>
          </div>
        </div>
      </div>
      <div class="col s12 m4">
        <div class="card">
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" src="../../../assets/img/office.jpg" />
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4"
              >Card Title<i class="material-icons right">more_vert</i></span
            >
            <p><a href="#">This is a link</a></p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4"
              >Card Title<i class="material-icons right">close</i></span
            >
            <p>
              Here is some more information about this product that is only
              revealed once clicked on.
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class PensComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
