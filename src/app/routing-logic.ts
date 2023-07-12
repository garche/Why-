import { ChangeDetectorRef, Directive } from "@angular/core";
import { IonRouterOutlet, NavController } from "@ionic/angular";
@Directive()
export class RoutingLogic {
  constructor(
    private navController: NavController,
    private cdr: ChangeDetectorRef,
    private outler: IonRouterOutlet,
  ) {
  }
  public navigate(): void;
  public navigate(method: 'f' | 'b' | 'r', target: 'first' | 'second' | ''): void
  public navigate(method?: 'f' | 'b' | 'r', target?: 'first' | 'second' | ''): void {
    console.log(this.outler.getContext())
    switch (method) {
      case 'f':
        this.navController.navigateForward(target!);
        this.cdr.detectChanges()

        return;
      case 'b':
        this.navController.navigateBack(target!);
        return;
      case 'r':
        this.navController.navigateRoot(target!);
        return;
      default:
        this.navController.pop();
        return;
    }
  }
}
