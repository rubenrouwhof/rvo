import { Button } from '@nl-rvo/components/button/css/template';
import { RadioButtonField } from '@nl-rvo/components/form-field/css/radiobutton-field.template';
import { Fieldset } from '@nl-rvo/components/form-fieldset/css/template';
import { Header } from '@nl-rvo/components/header/css/template';
import { Heading } from '@nl-rvo/components/heading/css/template';
import { LayoutColumnRow } from '@nl-rvo/components/layout-column-row/css/template';
import { MaxWidthLayout } from '@nl-rvo/components/max-width-layout/css/template';
import { MenuBar } from '@nl-rvo/components/menubar/css/template';
import { ProgressTracker } from '@nl-rvo/components/progress-tracker/css/template';
import '../common/style.scss';

const Correspondentie = () => {
  return (
    <div className="rvo-demo-page">
      <Header />
      <MenuBar
        items={[
          { label: 'Home', icon: 'home', link: '#' },
          { label: 'Uitloggen', icon: 'versleutelen', link: '#', align: 'right' },
        ]}
        size="md"
        useIcons={true}
        iconPlacement="before"
        menuMaxWidth="md"
      />
      <MaxWidthLayout size="md">
        <main className="rvo-progress-tracker-active">
          <ProgressTracker
            steps={[
              { state: 'start', label: 'Jonge Vissers 2020', link: '#', size: 'md', line: 'straight' },
              {
                state: 'completed',
                label: 'Controleer uw gegevens',
                link: '/rvo/iframe.html?args=&id=demo-pagina-s-jonge-vissers--controleer-uw-gegevens&viewMode=story',
                size: 'md',
                line: 'straight',
              },
              {
                state: 'doing',
                label: 'Correspondentie',
                link: '/rvo/iframe.html?args=&id=demo-pagina-s-jonge-vissers--correspondentie&viewMode=story',
                size: 'md',
                line: 'straight',
              },
              {
                state: 'incomplete',
                label: 'Datum verleningsverzoek',
                link: '/rvo/iframe.html?args=&id=demo-pagina-s-jonge-vissers--datum&viewMode=story',
                size: 'md',
                line: 'straight',
              },
              {
                state: 'incomplete',
                label: 'Project vragen',
                link: '/rvo/iframe.html?args=&id=demo-pagina-s-jonge-vissers--project&viewMode=story',
                size: 'md',
                line: 'straight',
              },
              {
                state: 'incomplete',
                label: 'Kosten',
                link: '/rvo/iframe.html?args=&id=demo-pagina-s-jonge-vissers--kosten',
                size: 'md',
                line: 'straight',
              },
              {
                state: 'incomplete',
                label: 'Bijlagen',
                link: '/rvo/iframe.html?args=&id=demo-pagina-s-jonge-vissers--bijlagen',
                size: 'md',
                line: 'straight',
              },
              { state: 'incomplete', label: 'Samenvatting', link: '#', size: 'md', line: 'straight' },
              { state: 'incomplete', label: 'Ondertekenen', link: '#', size: 'md', line: 'straight' },
              { state: 'end', label: 'Bevestiging', link: '#', size: 'md', line: 'none' },
            ]}
          />
          <div className="rvo-form">
            <LayoutColumnRow size="xl">
              <div className="intro">
                <Heading type="h1" textContent="Correspondentie"></Heading>
              </div>
              <form>
                <LayoutColumnRow size="md">
                  <Fieldset legend="">
                    <RadioButtonField
                      layout="vertical"
                      name="radio-buttons"
                      labelText="Hoe wilt u correspondentie ontvangen?"
                      options={[
                        {
                          id: 'cora',
                          labelText:
                            'Ik ontvang berichten digitaal in Mijn Dossier.Ik verklaar dat ik voldoende bereikbaar ben via e-mail en Mijn Dossier',
                        },
                        { id: 'corb', labelText: 'Ik ontvang berichten liever op papier.' },
                      ]}
                    ></RadioButtonField>
                    <div className="rvo-alert rvo-alert--warning">
                      <div className="rvo-icon rvo-icon-waarschuwing rvo-status-icon-waarschuwing rvo-icon--lg"></div>
                      <div className="rvo-alert-text">
                        <p>
                          U heeft aangegeven dat u de correspondentie digitaal wil ontvangen. Hiermee geeft u akkoord
                          dat RVO berichten plaatst over uw aanvraag in Mijn Dossier en u een e-mail stuurt over
                          statuswijzigingen van uw aanvraag.
                        </p>
                      </div>
                    </div>
                  </Fieldset>
                  <Fieldset legend="Contactpersoon">
                    <RadioButtonField
                      layout="horizontal"
                      name="radio-buttons"
                      labelText="Is de contactpersoon iemand anders dan de indiener?"
                      options={[
                        { id: 'cpa', labelText: 'Ja' },
                        { id: 'cpb', labelText: 'Nee' },
                      ]}
                    ></RadioButtonField>
                  </Fieldset>
                  <div className="rvo-button-group">
                    <Button
                      kind="secondary"
                      size="md"
                      textContent="Opslaan en sluiten"
                      active={false}
                      busy={false}
                      focus={false}
                      focusVisible={false}
                      disabled={false}
                      hover={false}
                      showIcon="no"
                    >
                      Secondary action
                    </Button>
                    <Button
                      kind="primary"
                      size="md"
                      textContent="Opslaan en verder"
                      active={false}
                      busy={false}
                      focus={false}
                      focusVisible={false}
                      disabled={false}
                      hover={false}
                      showIcon="no"
                    >
                      Secondary action
                    </Button>
                  </div>
                </LayoutColumnRow>
              </form>
            </LayoutColumnRow>
          </div>
        </main>
      </MaxWidthLayout>
    </div>
  );
};

export default Correspondentie;
