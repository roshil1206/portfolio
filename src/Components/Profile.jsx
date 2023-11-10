import React from "react";
import Card from "./Card/Card";

function Profile() {
  return (
    <Card>
      <div className="grid place-items-center py-8">
        <div className="avatar opacity-90">
          <div className="mb-5 rounded-full w-32 h-32 ring ring-offset-base-100 ring-offset-2">
            <img
              src="https://avatars.githubusercontent.com/u/53461152?v=4"
              className="rounded-full"
              alt="Avatar"
            />
          </div>
        </div>

        <h5 className="mb-2 text-2xl font-bold tracking-tight text-heading text-center">
          Roshil Ka Patel
        </h5>
        <p className="font-normal text-center">
          Software Engineer | Cloud Enthusiast | Node.js | React
        </p>
        <a
          href="/Resume.pdf"
          target="_blank"
          className="btn btn-outline btn-sm text-xs mt-6 opacity-50"
        >
          Download Resume
        </a>
      </div>
    </Card>
  );
}

export default Profile;
