import { AppModule } from './app/app.module';



describe("Midway: Testing Modules", () => {

  describe("App Module:", () => {
    
    it("should be registered", function() {
      expect(module).not.toBeNull;
    });

    describe("Dependencies:", function() {
      let deps;
      let hasModule = (m) => {
        return deps.index(m) >= 0;
      };
      
      
      it("should have App.Controllers as a dependency", () => {
        expect(hasModule('App.Controllers')).toBe(true);
      });
      
      it("should have App.Directives as a dependency", () => {
        expect(hasModule('App.Directives')).toBe(true);
      });
      
      it("should have App.Filters as a dependency", () => {
        expect(hasModule('App.Filters')).toBe(true);
      });
      
      it("should have App.Routes as a dependency", () => {
        expect(hasModule('App.Routes')).toBe(true);
      });
      
      it("should have App.Services as a dependency", () => {
        expect(hasModule('App.Services')).toBe(true);
      });
    });
  });
});