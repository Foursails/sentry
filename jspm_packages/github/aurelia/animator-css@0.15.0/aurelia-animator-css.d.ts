declare module 'aurelia-animator-css' {
  import { animationEvent, Animator }  from 'aurelia-templating';
  
  /**
   * Aurelia animator implementation using CSS3-Animations
   */
  export class CssAnimator {
    constructor();
    
    /* Public API Begin */
    /**
       * Run an animation for the given element/elements with the specified className in parallel
       *
       * @param element   {HTMLElement, Array<HTMLElement>} the element/s to be animated
       * @param className {String}                          the class to be added and removed
       *
       * @returns {Promise<Boolean>}
       */
    animate(element: HTMLElement | Array<HTMLElement>, className: string): Promise<boolean>;
    
    /**
       * Runs a series of animations in sequence
       *
       * @param animations {Array<{element, className}>} array of animation parameters
       *
       * @returns {Promise.<Boolean>}
       */
    runSequence(animations: Array<CssAnimation>): Promise<boolean>;
    
    /**
       * Stub of move interface method
       *
       * @returns {Promise.<Boolean>}
       */
    move(): Promise<boolean>;
    
    /**
       * Performs the enter animation for the given element, triggered by a [my-class]-enter-active css-class
       *
       * @param element {HTMLElement} the element to be animated
       *
       * @returns {Promise.<Boolean>}
       */
    enter(element: HTMLElement): Promise<boolean>;
    
    /**
       * Performs the leave animation for the given element, triggered by a [my-class]-leave-active css-class
       *
       * @param element {HTMLElement} the element to be animated
       *
       * @returns {Promise.<Boolean>}
       */
    leave(element: HTMLElement): Promise<boolean>;
    
    /**
       * Executes an animation by removing a css-class
       *
       * @param element        {HTMLElement}                    the element to be animated
       * @param className      {String}                         css-class to be removed
       * @param suppressEvents {Boolean} [suppressEvents=false] suppress event triggering
       *
       * @returns {Promise.<Boolean>}
       */
    removeClass(element: HTMLElement, className: string, suppressEvents?: boolean): Promise<boolean>;
    
    /**
       * Executes an animation by adding a css-class
       *
       * @param element        {HTMLElement}                    the element to be animated
       * @param className      {String}                         css-class to be removed
       * @param suppressEvents {Boolean} [suppressEvents=false] suppress event triggering
       *
       * @returns {Promise.<Boolean>}
       */
    addClass(element: HTMLElement, className: string, suppressEvents?: boolean): Promise<boolean>;
  }
  
  /* Public API End */
  export function configure(config: Object, callback?: ((animator: CssAnimator) => void)): any;
}