export default function Contract() {
  const config = [
    {
      section: "Site de prezentare",
      id: "site-de-prezentare",
      imgs: ["/contract/prezentare.jpg"],
    },
    {
      section: "Platformă de rezervări",
      id: "platforma-de-rezervari",
      imgs: ["/contract/platforma.jpg"],
    },
    {
      section: "Panou de administrare",
      id: "panou-de-administrare",
      imgs: [
        "/contract/panou.jpg",
        "/contract/panou1.jpg",
        "/contract/panou2.jpg",
        "/contract/panou3.jpg",
      ],
    },
  ];
  return (
    <div
      style={{
        padding: "100px 10px",
      }}
    >
      <p>Contract</p>
      {config.map((el) => {
        return (
          <div id={el.id}>
            <h2
              style={{
                margin: "30px",
              }}
            >
              {el.section}
            </h2>
            {el.imgs.map((el_img) => {
              return (
                <img
                  src={el_img}
                  alt="img"
                  style={{
                    width: "100%",
                    objectFit: "contain",
                  }}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
