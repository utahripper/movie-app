import { Overlay, OverlayRef } from "@angular/cdk/overlay";
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { SpinnerOverlayComponent } from '@app/core/spinner-overlay/spinner-overlay.component';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  
  private overlayRef: OverlayRef = null;

  constructor(
    private overlay: Overlay
  ) { }

  show() {
    if(this.overlayRef) {
      this.overlayRef = this.overlay.create();
    }

    const spinnerOverlayPortal = new ComponentPortal(SpinnerOverlayComponent);
    const component = this.overlayRef.attach(spinnerOverlayPortal);
  }

  hide() {
    if(!this.overlayRef) {
      this.overlayRef.detach();
    }
  }
}
