import React, { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    if (window.innerWidth >= 991) {
      let isCursorLocked = false;
      const cursor = document.getElementById("cursor");
      const cursorContentWrap = document.querySelector(".cursor-content-wrap");
      const cursorContent = document.querySelector(".cursor-content");

      // Make cursor visible immediately
      if (cursor) cursor.style.opacity = "1";

      function cursorMove(e) {
        if (!isCursorLocked && cursor) {
          cursor.style.top = e.clientY + "px";
          cursor.style.left = e.clientX + "px";
        }
        if (cursorContent) {
          cursorContent.style.opacity = "0.5";
        }
      }

      document.addEventListener("mousemove", cursorMove);
      
      document.addEventListener("mousedown", () => {
        if (!isCursorLocked && cursorContentWrap && cursorContent) {
          cursorContentWrap.style.transform = "scale(0.9, 0.9)";
          cursorContent.style.opacity = "0.8";
        }
      });

      document.addEventListener("mouseup", () => {
        if (!isCursorLocked && cursorContentWrap && cursorContent) {
          cursorContentWrap.style.transform = "scale(1, 1)";
          cursorContent.style.opacity = "0.5";
        }
      });

      const interactiveElements = document.querySelectorAll("[cursor-ix=true]");
      
      interactiveElements.forEach(element => {
        let elementRect = null;
        
        element.addEventListener("mouseenter", ({ currentTarget }) => {
          elementRect = currentTarget.getBoundingClientRect();
          const styles = window.getComputedStyle(currentTarget);
          const zIndex = styles.getPropertyValue("z-index");

          if (currentTarget.classList.contains("lift")) {
            if (cursorContentWrap) cursorContentWrap.style.opacity = "0%";
          }

          if (cursor) {
            isCursorLocked = true;
            cursor.classList.add("is-locked");
            cursor.style.top = elementRect.top + elementRect.height / 2 + "px";
            cursor.style.left = elementRect.left + elementRect.width / 2 + "px";
            cursor.style.width = elementRect.width + "px";
            cursor.style.height = elementRect.height + "px";
            cursor.style.zIndex = parseInt(zIndex) - 1;
          }
        });

        element.addEventListener("mousemove", ({ currentTarget }) => {
          if (elementRect && cursor && !currentTarget.classList.contains("form-input")) {
            const yRatio = (event.clientY - elementRect.top - elementRect.height / 2) / (elementRect.height / 2);
            const xRatio = (event.clientX - elementRect.left - elementRect.width / 2) / (elementRect.width / 2);
            
            cursor.style.transform = "translate(" + 8 * xRatio + "px, " + 6 * yRatio + "px)";
            
            if (!currentTarget.classList.contains("lift")) {
              currentTarget.style.transform = "translate(" + 3 * xRatio + "px, " + 2 * yRatio + "px) scale(1.025)";
            }
          }
        });

        element.addEventListener("mouseleave", () => {
          isCursorLocked = false;
          
          if (cursor) {
            cursor.style.transitionDuration = "150ms";
            cursor.style.width = "20px";
            cursor.style.height = "20px";
            cursor.style.transform = "translate(0px, 0px)";
            cursor.classList.remove("is-locked");
          }
          
          if (element.style) {
            element.style.transform = "translate(0px, 0px) scale(1)";
          }
        });

        element.addEventListener("mousedown", () => {
          if (cursorContent) cursorContent.style.opacity = "0.8";
        });

        element.addEventListener("mouseup", () => {
          if (cursorContent) cursorContent.style.opacity = "0.5";
        });
      });

      return () => {
        document.removeEventListener("mousemove", cursorMove);
        document.removeEventListener("mousedown", () => {});
        document.removeEventListener("mouseup", () => {});
        interactiveElements.forEach(element => {
          element.removeEventListener("mouseenter", () => {});
          element.removeEventListener("mousemove", () => {});
          element.removeEventListener("mouseleave", () => {});
          element.removeEventListener("mousedown", () => {});
          element.removeEventListener("mouseup", () => {});
        });
      };
    }
  }, []);

  return (
    <>
      <div 
        id="cursor" 
        className="fixed z-[1000000] w-5 h-5 opacity-0 pointer-events-none transition-all duration-200 ease-[cubic-bezier(.215,.61,.355,1)]"
      >
        <div className="cursor-content-wrap w-full h-full transition-all duration-200 ease-[cubic-bezier(.215,.61,.355,1)]">
          <div className="cursor-content w-full h-full rounded-[10px] bg-[#989898] opacity-50 transition-all duration-200 ease-[cubic-bezier(.215,.61,.355,1)]"></div>
        </div>
      </div>
    </>
  );
};

export default CustomCursor;