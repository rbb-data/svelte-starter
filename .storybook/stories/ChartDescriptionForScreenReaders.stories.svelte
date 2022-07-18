<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import ChartDescriptionForScreenReaders from '$comps/shared/ChartDescriptionForScreenReaders.svelte';
</script>

<Meta
  title="Viz/ChartDescriptionForScreenReaders"
  component={ChartDescriptionForScreenReaders}
  argTypes={{
    title: {
      // @ts-ignore
      type: { required: true },
    },
    subtitle: {
      // @ts-ignore
      type: { required: true },
    },
  }}
/>

<Story name="Basic">
  <i>
    Nothing to see here as chart descriptions for screen readers are visually
    hidden. See below for a story in debug mode that renders the description
    provided to a screen reader.
  </i>
  <ChartDescriptionForScreenReaders
    title="Diesjähriger Niederschlag im Sommer deutlich höher als üblich"
    subtitle={`
      Monatliche Regenmenge in Liter pro Quadratmeter 2021 im Vergleich zum
      Durchschnitt der Jahre 2000 - 2020 in Berlin.
    `}
    summary={`
      Während die Regenmenge in Berlin in den letzten zehn Jahren 25 Liter pro
      Quadratmeter nie überschritten hat, hat es 2021 im September
      bis zu 103 Liter pro Quadratmeter geregnet.
    `}
    description={`
      Der Chart zeigt zwei Linien. Die erste Linie zeigt den monatlichen
      Niederschlag in Liter pro Quadratmeter im Jahr 2021. Die Regenmenge
      steigt in den Sommermonaten 2021 deutlich an und erreicht einen
      Höchststand von 103 Liter pro Quadratmeter im September. Das ist deutlich
      höher als die durchschnittliche Regenmenge in den Sommermonaten der letzten zehn
      Jahre, wie die zweite Linie zeigt. In diesem Zeitraum hat es auch in den Sommermonaten
      durchschnittlich nie mehr als 25 Liter pro Quadratmeter geregnet.
    `}
    context={`
      Der Chart basiert auf ausgedachten Daten und dient lediglich als Beispiel
      für statische Datenvisualisierungen in Svelte.
    `}
  />
</Story>

<Story name="Debug">
  <ChartDescriptionForScreenReaders
    title="Diesjähriger Niederschlag im Sommer deutlich höher als üblich"
    subtitle={`
      Monatliche Regenmenge in Liter pro Quadratmeter 2021 im Vergleich zum
      Durchschnitt der Jahre 2000 - 2020 in Berlin.
    `}
    summary={`
      Während die Regenmenge in Berlin in den letzten zehn Jahren 25 Liter pro
      Quadratmeter nie überschritten hat, hat es 2021 im September
      bis zu 103 Liter pro Quadratmeter geregnet.
    `}
    description={`
      Der Chart zeigt zwei Linien. Die erste Linie zeigt den monatlichen
      Niederschlag in Liter pro Quadratmeter im Jahr 2021. Die Regenmenge
      steigt in den Sommermonaten 2021 deutlich an und erreicht einen
      Höchststand von 103 Liter pro Quadratmeter im September. Das ist deutlich
      höher als die durchschnittliche Regenmenge in den Sommermonaten der letzten zehn
      Jahre, wie die zweite Linie zeigt. In diesem Zeitraum hat es auch in den Sommermonaten
      durchschnittlich nie mehr als 25 Liter pro Quadratmeter geregnet.
    `}
    context={`
      Der Chart basiert auf ausgedachten Daten und dient lediglich als Beispiel
      für statische Datenvisualisierungen in Svelte.
    `}
    debug
  />
</Story>
