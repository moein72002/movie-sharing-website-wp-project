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
        <video className="video" autoPlay progress controls>
            <source src="https://rr2---sn-5hne6nzd.googlevideo.com/videoplayback?expire=1678463133&ei=PfwKZL-fJJKIgQfkhKTIBA&ip=109.236.81.161&id=o-ANV-C_VmLr7nrNPyCbVWGjn5jz9oKjf1qTa_minED-OK&itag=135&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C394%2C395%2C396%2C397%2C398%2C399%2C400&source=youtube&requiressl=yes&mh=wE&mm=31%2C26&mn=sn-5hne6nzd%2Csn-4g5e6nze&ms=au%2Conr&mv=m&mvi=2&pl=24&initcwndbps=72500&vprv=1&mime=video%2Fmp4&ns=fchMGvk5ReW5weVvpOymerML&gir=yes&clen=7491946&dur=149.732&lmt=1668197494579611&mt=1678441282&fvip=4&keepalive=yes&fexp=24007246&c=WEB&txp=5532434&n=wM4XqSgF4Vd4Mg&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRAIgTVzwqTlDzc52Ts4VFbQ4pLBnSH9kRU7hOa6t97PqzL8CIDQwNx6piThua24vp-kx9_AzWiJdKIzICdDvFhuahaJe&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRAIgL3A0L00HqrgQQeYtxY8RAtn6XVqrNLHTOEFg2WwnfYYCIEvzRplX4jHI9Mf39mqatKssLRZGSZ48hMqwyy4xtkWD" type="video/mp4"/>
        </video>
    </div>
  );
}
