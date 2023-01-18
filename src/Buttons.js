import { Leftnavbar } from "./Leftnavbar";
import { Link } from "react-router-dom";
export function Buttons() {


  return (
    <div>
      
      <Leftnavbar/>
    
    <div class="container-fluid outermost">

      {/* <!-- Page Heading --> */}
      <h1 class="h3 mb-4 text-gray-800  text-left">Buttons</h1>

      <div class="row">

        <div class="col-lg-6">

          {/* <!-- Circle Buttons --> */}
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Circle Buttons</h6>
            </div>
            <div class="card-body d-flex flex-column justify-content-start  align-items-start">
              <p>Use Font Awesome Icons (included with this theme package) along with the circle
                buttons as shown in the examples below!</p>
              {/* <!-- Circle Buttons (Default) --> */}
              <div class="d-flex flex-column align-items-start justify-content-center">

                <div class="mb-2">
                  <code>.btn-circle</code>
                </div>
                <div>

                  <Link to="#" class="btn btn-primary btn-circle">
                    <i class="fab fa-facebook-f"></i>
                  </Link>
                  <Link to="#" class="btn btn-success btn-circle">
                    <i class="fas fa-check"></i>
                  </Link>
                  <Link to="#" class="btn btn-info btn-circle">
                    <i class="fas fa-info-circle"></i>
                  </Link>
                  <Link to="#" class="btn btn-warning btn-circle">
                    <i class="fas fa-exclamation-triangle"></i>
                  </Link>
                  <Link to="#" class="btn btn-danger btn-circle">
                    <i class="fas fa-trash"></i>
                  </Link>
                </div>
              </div>
              {/* <!-- Circle Buttons (Small) --> */}
              <div>


                <div class="mt-4 mb-2">
                  <code>.btn-circle .btn-sm</code>
                </div>
                <Link to="#" class="btn btn-primary btn-circle btn-sm">
                  <i class="fab fa-facebook-f"></i>
                </Link>
                <Link to="#" class="btn btn-success btn-circle btn-sm">
                  <i class="fas fa-check"></i>
                </Link>
                <Link to="#" class="btn btn-info btn-circle btn-sm">
                  <i class="fas fa-info-circle"></i>
                </Link>
                <Link to="#" class="btn btn-warning btn-circle btn-sm">
                  <i class="fas fa-exclamation-triangle"></i>
                </Link>
                <Link to="#" class="btn btn-danger btn-circle btn-sm">
                  <i class="fas fa-trash"></i>
                </Link>
              </div>


              {/* <!-- Circle Buttons (Large) --> */}
              <div class="d-flex flex-column align-items-start justify-content-center">


                <div class="mt-4 mb-2">
                  <code>.btn-circle .btn-lg</code>
                </div>
                <div>


                  <Link to="#" class="btn btn-primary btn-circle btn-lg">
                    <i class="fab fa-facebook-f"></i>
                  </Link>
                  <Link to="#" class="btn btn-success btn-circle btn-lg">
                    <i class="fas fa-check"></i>
                  </Link>
                  <Link to="#" class="btn btn-info btn-circle btn-lg">
                    <i class="fas fa-info-circle"></i>
                  </Link>
                  <Link to="#" class="btn btn-warning btn-circle btn-lg">
                    <i class="fas fa-exclamation-triangle"></i>
                  </Link>
                  <Link to="#" class="btn btn-danger btn-circle btn-lg">
                    <i class="fas fa-trash"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Brand Buttons --> */}
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Brand Buttons</h6>
            </div>
            <div class="card-body">
              <p>Google and Facebook buttons are available featuring each company's respective
                brand color. They are used on the user login and registration pages.</p>
              <p>You can create more custom buttons by adding a new color variable in the
                <code>_variables.scss</code> file and then using the Bootstrap button variant
                mixin to create a new style, as demonstrated in the <code>_buttons.scss</code>
                file.</p>
              <Link to="#" class="btn btn-google btn-block"><i class="fab fa-google fa-fw"></i>
                .btn-google</Link>
              <Link to="#" class="btn btn-facebook btn-block"><i
                class="fab fa-facebook-f fa-fw"></i> .btn-facebook</Link>

            </div>
          </div>

        </div>

        <div class="col-lg-6">

          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Split Buttons with Icon</h6>
            </div>
            <div class="card-body d-flex flex-column align-items-start justify-content-center">
              <p>Works with any button colors, just use the <code>.btn-icon-split</code> class and
                the markup in the examples below. The examples below also use the
                <code>.text-white-50</code> helper class on the icons for additional styling,
                but it is not required.</p>
              <Link to="#" class="btn btn-primary btn-icon-split">
                <span class="icon text-white-50">
                  <i class="fas fa-flag"></i>
                </span>
                <span class="text">Split Button Primary</span>
              </Link>
              <div class="my-2"></div>
              <Link to="#" class="btn btn-success btn-icon-split">
                <span class="icon text-white-50">
                  <i class="fas fa-check"></i>
                </span>
                <span class="text">Split Button Success</span>
              </Link>
              <div class="my-2"></div>
              <Link to="#" class="btn btn-info btn-icon-split">
                <span class="icon text-white-50">
                  <i class="fas fa-info-circle"></i>
                </span>
                <span class="text">Split Button Info</span>
              </Link>
              <div class="my-2"></div>
              <Link to="#" class="btn btn-warning btn-icon-split">
                <span class="icon text-white-50">
                  <i class="fas fa-exclamation-triangle"></i>
                </span>
                <span class="text">Split Button Warning</span>
              </Link>
              <div class="my-2"></div>
              <Link to="#" class="btn btn-danger btn-icon-split">
                <span class="icon text-white-50">
                  <i class="fas fa-trash"></i>
                </span>
                <span class="text">Split Button Danger</span>
              </Link>
              <div class="my-2"></div>
              <Link to="#" class="btn btn-secondary btn-icon-split">
                <span class="icon text-white-50">
                  <i class="fas fa-arrow-right"></i>
                </span>
                <span class="text">Split Button Secondary</span>
              </Link>
              <div class="my-2"></div>
              <Link to="#" class="btn btn-light btn-icon-split">
                <span class="icon text-gray-600">
                  <i class="fas fa-arrow-right"></i>
                </span>
                <span class="text">Split Button Light</span>
              </Link>
              <div class="mb-4"></div>
              <p>Also works with small and large button classes!</p>
              <Link to="#" class="btn btn-primary btn-icon-split btn-sm">
                <span class="icon text-white-50">
                  <i class="fas fa-flag"></i>
                </span>
                <span class="text">Split Button Small</span>
              </Link>
              <div class="my-2"></div>
              <Link to="#" class="btn btn-primary btn-icon-split btn-lg">
                <span class="icon text-white-50">
                  <i class="fas fa-flag"></i>
                </span>
                <span class="text">Split Button Large</span>
              </Link>
            </div>
          </div>

        </div>

      </div>

    </div>
    </div>
  );
}
