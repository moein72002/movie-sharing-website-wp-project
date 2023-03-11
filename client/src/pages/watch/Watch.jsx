import { ArrowBackOutlined } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import "./watch.scss";

export default function Watch() {
  // const location = useLocation();
  // const movie = location.movie;
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
        <video className="video" autoPlay controls>
            <source src="https://persian5.asset.aparat.com/aparat-video/4cddc9e92b1af34bca9bcb3ae19e804a48737763-480p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjU5MDEwYTM2NmZlZjA5YTQ1ZTVjMmVlZmZlYTBjMmNlIiwiZXhwIjoxNjc4NDY1MTg5LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.cevGnD40ZZkrYwQ2z6MEY2VTn2Px7hBhq-XFxMHGzjM" type="video/mp4"/>
        </video>
    </div>
  );
}
