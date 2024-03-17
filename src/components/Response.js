const Response = ({ data }) => {
  return (
    <div className="response-box">
      <div className="r-box">
        <h3>Significant achievements:</h3>
        <ul>
          {data &&
            data.significantAchievements.map((item, idx) => (
              <li key={"sig-" + idx}>
                {item.contribution}
                <ul>
                  {item.ATSfriendlyKeywords &&
                    item.ATSfriendlyKeywords.map((it, iddx) => (
                      <li key={"sig-ats-" + iddx}>{it}</li>
                    ))}
                </ul>
              </li>
            ))}
        </ul>
      </div>

      <div className="r-box">
        <h3>ATS friendly keywords:</h3>
        <ul>
          {data && data.ATSfriendlyKeywords
            ? data.ATSfriendlyKeywords.map((item, idx) => (
                <li key={"ats-" + idx}>{item}</li>
              ))
            : ""}
        </ul>
      </div>
    </div>
  );
};

export default Response;
