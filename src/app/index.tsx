/**
 * ============================================================================
 * 🥊 RETO 04 — Contenedor del Bar Salesiano (useState directo)
 * Módulo: Programación Móvil — 3° Bachillerato Técnico (UETS)
 * ============================================================================
 */

import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { BotonContador } from '@/components/BotonContador';
import { ContadorDisplay } from '@/components/ContadorDisplay';
import { calcularValor, estadoUI, type ContadorConfig } from '@/domain/counter';

export default function Home() {
  // --------------------------------------------------------------------------
  // 1. CONTADOR 1: SANDUCHES
  // --------------------------------------------------------------------------
  const [sanduches, setSanduches] = useState(0);
  const configSanduches: ContadorConfig = { valor: sanduches, paso: 1, minimo: 0, maximo: 10 };
  const estadoSanduches = estadoUI(sanduches, configSanduches);

  const incrementarSanduches = () => {
    setSanduches(calcularValor('incrementar', configSanduches));
  };
  const decrementarSanduches = () => {
    setSanduches(calcularValor('decrementar', configSanduches));
  };
  const reiniciarSanduches = () => {
    setSanduches(calcularValor('reiniciar', configSanduches));
  };

  // --------------------------------------------------------------------------
  // 2. CONTADOR 2: EMPANADAS (Integrador)
  // --------------------------------------------------------------------------
  const [empanadas, setEmpanadas] = useState(0);
  const configEmpanadas: ContadorConfig = { valor: empanadas, paso: 1, minimo: 0, maximo: 10 };
  const estadoEmpanadas = estadoUI(empanadas, configEmpanadas);

  const incrementarEmpanadas = () => {
    setEmpanadas(calcularValor('incrementar', configEmpanadas));
  };
  const decrementarEmpanadas = () => {
    setEmpanadas(calcularValor('decrementar', configEmpanadas));
  };
  const reiniciarEmpanadas = () => {
    setEmpanadas(calcularValor('reiniciar', configEmpanadas));
  };

  // --------------------------------------------------------------------------
  // 3. CONTADOR 3: JUGOS (Integrador)
  // --------------------------------------------------------------------------
  const [jugos, setJugos] = useState(0);
  const configJugos: ContadorConfig = { valor: jugos, paso: 1, minimo: 0, maximo: 10 };
  const estadoJugos = estadoUI(jugos, configJugos);

  const incrementarJugos = () => {
    setJugos(calcularValor('incrementar', configJugos));
  };
  const decrementarJugos = () => {
    setJugos(calcularValor('decrementar', configJugos));
  };
  const reiniciarJugos = () => {
    setJugos(calcularValor('reiniciar', configJugos));
  };

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Bar Salesiano · Contadores</Text>

        {/* --- CONTADOR: SANDUCHES --- */}
        <ContadorDisplay valor={sanduches} etiqueta="Sanduches" />
        <View style={styles.actions}>
          <BotonContador
            label="+1"
            onPress={incrementarSanduches}
            variante="primary"
            disabled={estadoSanduches === 'MAXIMO'}
          />
          <BotonContador
            label="-1"
            onPress={decrementarSanduches}
            variante="secondary"
            disabled={estadoSanduches === 'MINIMO'}
          />
          <BotonContador label="Reiniciar" onPress={reiniciarSanduches} variante="danger" />
        </View>

        {/* --- CONTADOR: EMPANADAS --- */}
        <ContadorDisplay valor={empanadas} etiqueta="Empanadas" />
        <View style={styles.actions}>
          <BotonContador
            label="+1"
            onPress={incrementarEmpanadas}
            variante="primary"
            disabled={estadoEmpanadas === 'MAXIMO'}
          />
          <BotonContador
            label="-1"
            onPress={decrementarEmpanadas}
            variante="secondary"
            disabled={estadoEmpanadas === 'MINIMO'}
          />
          <BotonContador label="Reiniciar" onPress={reiniciarEmpanadas} variante="danger" />
        </View>

        {/* --- CONTADOR: JUGOS --- */}
        <ContadorDisplay valor={jugos} etiqueta="Jugos" />
        <View style={styles.actions}>
          <BotonContador
            label="+1"
            onPress={incrementarJugos}
            variante="primary"
            disabled={estadoJugos === 'MAXIMO'}
          />
          <BotonContador
            label="-1"
            onPress={decrementarJugos}
            variante="secondary"
            disabled={estadoJugos === 'MINIMO'}
          />
          <BotonContador label="Reiniciar" onPress={reiniciarJugos} variante="danger" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#EFE6D6',
  },
  content: {
    padding: 20,
    gap: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '900',
    textTransform: 'uppercase',
    color: '#0A0A0A',
  },
  actions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'center',
  },
});
